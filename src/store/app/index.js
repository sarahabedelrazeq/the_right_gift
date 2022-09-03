import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_THEME, DEFAULT_LANGUAGE } from "../../constants";
import categories from "../../data/categories.json";
import tags from "../../data/tags.json";
import items from "../../data/items.json";

const initialState = {
  language: DEFAULT_LANGUAGE,
  theme: DEFAULT_THEME,
  tags: [],
  categories: [],
  items: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    switchLanguage: (state, action) => {
      state.language = action.payload;
    },
    switchTheme: (state, action) => {
      state.theme = action.payload;
    },
    addCategory: (state, action) => {
      state.categories = [
        ...state.categories,
        {
          id:
            categories.length !== 0
              ? categories[categories.length - 1].id + 1
              : 1,
          ...action.payload,
        },
      ];
    },
    addTag: (state, action) => {
      state.tags = [
        ...state.tags,
        {
          id:
            tags.length !== 0
              ? tags[tags.length - 1].id + 1
              : 1,
          ...action.payload.tag,
          category: action.payload.category,
        },
      ];
    },
    addItem: (state, action) => {
      state.items = [
        ...state.items,
        {
          id:
            items.length !== 0
              ? items[items.length - 1].id + 1
              : 1,
          ...action.payload.item,
          category: action.payload.category,
        },
      ];
    },
  },
});

export const { switchLanguage, switchTheme, addCategory, addTag, addItem } =
  appSlice.actions;
export default appSlice.reducer;
