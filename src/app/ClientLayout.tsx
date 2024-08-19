"use client";

import { FavoritesProvider } from "../context/FavContext";

export const ClientLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <FavoritesProvider>{children}</FavoritesProvider>;
};
