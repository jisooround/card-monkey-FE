import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import getTokenApi from "../api/monkeyGetToken";

export type SearchCard = {
  id: number;
  name: string;
  company: string;
  image: string;
  type: string;
};

export interface SearchCardState {
  searchList: SearchCard[];
  searchName: string;
  searchCompany: string[];
  searchBenefit: string[];
  status: "idle" | "loading" | "failed";
}

const initialState: SearchCardState = {
  searchList: [],
  searchName: "",
  searchCompany: [],
  searchBenefit: [],
  status: "idle",
};

type UnionSearch = {
  selectedBenefit: string[];
  selectedCompany: string[];
};

const getBenefitCard = async (selectedBenefit: string[]) => {
  let index = 0;
  let benefitCards: SearchCard[] = [];
  if (selectedBenefit.length === 0) {
    benefitCards = [];
    return benefitCards;
  }
  for (const benefit of selectedBenefit) {
    const data = await getTokenApi.searchByBenefit(benefit);
    if (index === 0) {
      benefitCards = data;
    } else {
      const newCardList = benefitCards.filter((card: SearchCard) => {
        return data.find((item: SearchCard) => item.id === card.id);
      });
      benefitCards = newCardList;
    }
    index++;
  }
  return benefitCards;
};

const getCompanyCard = async (selectedCompany: string[]) => {
  let companyCards: SearchCard[] = [];
  if (selectedCompany.length === 0) {
    companyCards = [];
    return companyCards;
  }
  for (const company of selectedCompany) {
    const data = await getTokenApi.searchByCompany(company);
    companyCards.push(...data);
  }
  return companyCards;
};

export const fetchSearch = createAsyncThunk(
  "search/fetchSearch",
  async (selected: UnionSearch) => {
    const benefitData = await getBenefitCard(selected.selectedBenefit);
    const companyData = await getCompanyCard(selected.selectedCompany);
    if (benefitData.length === 0) {
      return companyData;
    }
    if (companyData.length === 0) {
      return benefitData;
    }
    const newCardList = benefitData.filter((card: SearchCard) => {
      return companyData.find((item: SearchCard) => item.id === card.id);
    });
    return newCardList;
  },
);

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    handleSearchBenefit(state, action: PayloadAction<string>) {
      if (state.searchBenefit.includes(action.payload)) {
        state.searchBenefit = state.searchBenefit.filter(
          (item) => item != action.payload,
        );
      } else {
        state.searchBenefit = [...state.searchBenefit, action.payload];
      }
    },
    handleSearchCompany(state, action: PayloadAction<string>) {
      if (state.searchCompany.includes(action.payload)) {
        state.searchCompany = state.searchCompany.filter(
          (item) => item != action.payload,
        );
      } else {
        state.searchCompany = [...state.searchCompany, action.payload];
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearch.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchSearch.fulfilled, (state, action) => {
      state.status = "idle";
      state.searchList = action.payload;
    });
    builder.addCase(fetchSearch.rejected, (state) => {
      state.status = "failed";
    });
  },
});

// Action creators are generated for each case reducer function
export const { handleSearchBenefit, handleSearchCompany } = searchSlice.actions;

export default searchSlice.reducer;
