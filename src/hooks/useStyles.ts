import { useMemo } from 'react';
import { theme } from '../theme/theme';

type CustomStyles = {
    root: string;
    secondary: string;
};

const useCustomStyles = (): CustomStyles => {
    return useMemo(() => ({
        root: `
      color: ${theme.colors.primary};
      padding: ${theme.spacing.medium};
    `,
        secondary: `
      color: ${theme.colors.secondary};
      padding: ${theme.spacing.large};
    `,
    }), []);
};

export default useCustomStyles;