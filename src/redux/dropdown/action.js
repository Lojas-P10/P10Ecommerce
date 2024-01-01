import dropdownType from "./action-type";

export const openDropdown = () => ({
  type: dropdownType.OPEN_DROPDOWN,
});

export const closeDropdown = () => ({
  type: dropdownType.CLOSE_DROPDOWN,
});