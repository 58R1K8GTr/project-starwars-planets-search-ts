import { ReactElement } from "react";
import DataProvider from "../../context/DataProvider";
import { render } from '@testing-library/react';

function renderWithContexts(component: ReactElement) {
  return {
      ...render(
        <DataProvider>
          { component }
        </DataProvider>
      )
    };
}

export default renderWithContexts;
