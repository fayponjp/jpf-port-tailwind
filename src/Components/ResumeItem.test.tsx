import {render, screen} from '@testing-library/react';
import ResumeItem from './ResumeItem';
import {describe, it, expect} from 'vitest';
import '@testing-library/jest-dom/vitest';

describe('ResumeItem component test', () => {
    // title, date range and institution are strings
    // date range is usually 'YYYY -- YYYY' or just YYYY
    // 'items' is a jsx array 
    it('Accepts title, date range, institution and items and displays correct values', () => {
        const testTitle = 'ResumeItem title';
        const testDateRange = '2021 -- 2022';
        const testInstitution = 'Test Institution Inc.';
        const testItems = ['prop', <p>Paragraph prop</p>];

        render(<ResumeItem 
                title={testTitle} 
                dateRange={testDateRange} 
                institution={testInstitution} 
                items={testItems}
            />);
        
        const renderedUL = screen.getByTestId('resume-item');

        expect(screen.getByText(testTitle)).toBeInTheDocument();
        expect(screen.getByText(testDateRange)).toBeInTheDocument();
        expect(screen.getByText(testInstitution)).toBeInTheDocument();

        expect(renderedUL.querySelectorAll('li')).toHaveLength(testItems.length);

    });

    it('If institution is not included', () => {

    });
})