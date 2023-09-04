import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import PositionsCard from './PositionsCard'

describe('<PositionsCard />', () => {
  const job =  {
            "absolute_url": "https://careers.unity.com/position?id=5273232&gh_jid=5273232",
            "data_compliance": [
                {
                    "type": "gdpr",
                    "requires_consent": false,
                    "requires_processing_consent": false,
                    "requires_retention_consent": false,
                    "retention_period": null
                }
            ],
            "internal_job_id": 2643553,
            "location": {
                "name": "Austin, TX, USA"
            },
            "metadata": [
                {
                    "id": 47944,
                    "name": "Worker Sub-Type",
                    "value": "Regular",
                    "value_type": "single_select"
                },
                {
                    "id": 2153586,
                    "name": "Region",
                    "value": "Americas",
                    "value_type": "short_text"
                }
            ],
            "id": 5273232,
            "updated_at": "2023-08-28T17:34:14-04:00",
            "requisition_id": "JOBREQ-2311340",
            "title": "Campaign Operations Manager"
        }

  it('should be defined', () => {
    expect(PositionsCard).toBeDefined()
  })

  test('renders the positions card', () => {
    render(
      <BrowserRouter>
        <Routes>   
          <Route path="*" element= {<PositionsCard job={job} />}/>
        </Routes>
      </BrowserRouter>
    )

    const locationText = screen.getByText('Austin, TX, USA')
    const titleText = screen.getByText('Campaign Operations Manager')
    const internalJobIdText = screen.getByText('Internal Job ID: 2643553')

    expect(locationText).toBeInTheDocument();
    expect(titleText).toBeInTheDocument();
    expect(internalJobIdText).toBeInTheDocument();

    expect(locationText).toHaveTextContent('Austin, TX, USA');
    expect(titleText).toHaveTextContent('Campaign Operations Manager');
    expect(internalJobIdText).toHaveTextContent('Internal Job ID: 2643553');
  });
})
