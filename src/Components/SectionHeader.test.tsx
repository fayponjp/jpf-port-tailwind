import {render, screen} from '@testing-library/react';
import SectionHeader from './SectionHeader';
import {describe, it, expect} from 'vitest';
import '@testing-library/jest-dom/vitest';

describe('SectionHeader component test', () => {
    it('renders a div that contains the given title', () => {
        const testTitle = 'Header Title';
        render(<SectionHeader title={testTitle}/>);
        expect(screen.getByText(testTitle)).toBeInTheDocument();
    });

    it('includes classnames in the container div', () => {
        const classNameTestList = 'bg-gray-400 text-white';
        const testTitle = 'ClassName test title';
        render(<SectionHeader title={testTitle} classNames={classNameTestList} />)
        expect(screen.getByTestId(`section-header-container-${testTitle}`)).toHaveClass(classNameTestList);
    });
    
});