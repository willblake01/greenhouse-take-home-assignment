import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import PositionCard from './PositionCard'

describe('<PositionCard />', () => {
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
      "updated_at": "2023-08-31T15:43:54-04:00",
      "requisition_id": "JOBREQ-2311340",
      "title": "Campaign Operations Manager",
      "content": "&lt;p&gt;&lt;strong&gt;The opportunity&lt;/strong&gt;&lt;/p&gt;\n&lt;p&gt;Unity’s Marketing Operations team is central to enabling data-driven decision-making, systems support, identifying new growth opportunities, and completing critical initiatives.&lt;/p&gt;\n&lt;p&gt;Do you love working with people from all over marketing and making an impact on a fast paced team? We&#39;re looking for someone just like you!&lt;/p&gt;\n&lt;p&gt;We are looking for a Campaign Operations Specialist to drive and manage some of our most critical and valuable projects and processes.&lt;/p&gt;\n&lt;p&gt;&lt;strong&gt;What you’ll be doing&lt;/strong&gt;&lt;/p&gt;\n&lt;ul&gt;\n&lt;li&gt;Establish the process for intake, scheduling, and execution of larger projects among the Marketing Operations and Lead Operations teams&lt;/li&gt;\n&lt;li&gt;Plan, develop and drive the project plans for multiple technical and non-technical marketing and demand generation projects&lt;/li&gt;\n&lt;li&gt;Set deadlines, drive for alignment, manage progress and report back to management and internal stakeholders on status of projects&lt;/li&gt;\n&lt;li&gt;Coordinate check points with cross functional teams and internal stakeholders to ensure accountability for successful and on time completion. While building seamless and effective end-to-end user experiences and ensure that project outcomes are widely adopted and understood through enablement and documentation.&lt;/li&gt;\n&lt;li&gt;Craft email nurture campaigns and audience segmentation as well as activating and pulling existing data from Eloqua.&lt;/li&gt;\n&lt;/ul&gt;\n&lt;p&gt;&lt;strong&gt;What we’re looking for&lt;/strong&gt;&lt;/p&gt;\n&lt;ul&gt;\n&lt;li&gt;Strong understanding of Eloqua and Salesforce and strong attention to detail.&lt;/li&gt;\n&lt;li&gt;You understand how technology and platforms fit as part of solutions, and have experience building, analyzing and communicating data and reports to business end-users.&lt;/li&gt;\n&lt;li&gt;Outstanding communication and active listening skills. Ability to dig into core issues and ask probing questions vs. taking problems at face value. You can summarize and state things in an unambiguous and concise way, but you can also listen and understand quickly, with no fear of asking clarifying questions to minimize confusion.&lt;/li&gt;\n&lt;li&gt;Well-organized project management skills. You can clearly define the project goals, identify collaborators, timeline, phases, and documentation that are needed to push a project forward.&lt;/li&gt;\n&lt;/ul&gt;\n&lt;p&gt;&lt;strong&gt;You May Also Have&lt;/strong&gt;&lt;/p&gt;\n&lt;ul&gt;\n&lt;li&gt;A go-getter personality who is not afraid to drive programs forward and report out to leadership.&lt;/li&gt;\n&lt;li&gt;Comfort driving technical conversations and presenting the information to non-technical business users.&lt;/li&gt;\n&lt;/ul&gt;\n&lt;p&gt;&lt;strong&gt;Life at Unity&lt;/strong&gt;&lt;/p&gt;\n&lt;p&gt;Unity (NYSE: U) is the world’s leading platform for creating and operating real-time 3D (RT3D) content. Creators, ranging from game developers to artists, architects, automotive designers, filmmakers, and others, use Unity to make their imaginations come to life. Unity is the foundation upon which the world’s most powerful digital content is created. Specifically, Unity’s platform provides a comprehensive set of software solutions to create, run and monetize interactive, real-time 2D and 3D content for mobile phones, tablets, PCs, consoles, and augmented and virtual reality devices.&lt;/p&gt;\n&lt;p&gt;In the fourth quarter of 2022, more than 70% of the top 1000 mobile games were made with Unity as derived from a blended number of the top 1000 games in the Google Play Store and Apple App Store. In 2022, Made with Unity Applications had more than 4 billion downloads per month. For more information, please visit &lt;a href=&quot;http://www.unity.com&quot;&gt;www.unity.com&lt;/a&gt;.&amp;nbsp;&lt;/p&gt;\n&lt;p&gt;&lt;em&gt;Unity is a proud equal opportunity employer. We are committed to fostering an inclusive, innovative environment and celebrate our employees across age, race, color, ancestry, national origin, religion, disability, sex, gender identity or expression, sexual orientation, or any other protected status in accordance with applicable law. Our differences are strengths that enable us to support the growing and evolving needs of our customers, partners, and collaborators. &lt;/em&gt;&lt;em&gt;If there are preparations or accommodations we can make to help ensure you have a comfortable and positive interview experience, please fill out &lt;/em&gt;&lt;a href=&quot;https://docs.google.com/forms/d/e/1FAIpQLSdrbRLG1N-apH1eahQ622Gypo-rmiAB6LLTP1UsSWQNu7omxQ/viewform&quot;&gt;&lt;em&gt;this form&lt;/em&gt;&lt;/a&gt;&lt;em&gt; to let us know.&lt;/em&gt;&lt;/p&gt;\n&lt;p&gt;&lt;em&gt;This position requires the incumbent to have a sufficient knowledge of English to have professional verbal and written exchanges in this language since the performance of the duties related to this position requires frequent and regular communication with colleagues and partners located worldwide and whose common language is English.&lt;/em&gt;&lt;/p&gt;\n&lt;p&gt;&lt;em&gt;Headhunters and recruitment agencies may not submit resumes/CVs through this website or directly to managers. Unity does not accept unsolicited headhunter and agency resumes. Unity will not pay fees to any third-party agency or company that does not have a signed agreement with Unity.&lt;/em&gt;&lt;em&gt;&lt;br&gt;&lt;/em&gt;&lt;em&gt;&lt;br&gt;&lt;/em&gt;&lt;em&gt;Your privacy is important to us. Please take a moment to review our&lt;/em&gt;&lt;a href=&quot;https://unity.com/legal/global-data-privacy-notice-to-prospects&quot;&gt;&lt;em&gt; &lt;/em&gt;&lt;em&gt;Prospect&lt;/em&gt;&lt;/a&gt;&lt;em&gt; and&lt;/em&gt;&lt;a href=&quot;https://unity.com/de/legal/global-data-privacy-notice-to-applicants&quot;&gt;&lt;em&gt; &lt;/em&gt;&lt;em&gt;Applicant&lt;/em&gt;&lt;/a&gt;&lt;em&gt; Privacy Policies. Should you have any concerns about your privacy, please contact us at DPO@unity.com.&lt;/em&gt;&lt;/p&gt;\n&lt;p&gt;Work visa/immigration sponsorship is not available for this position.&lt;/p&gt;\n&lt;div class=&quot;sc-epnACN cqlopD&quot;&gt;\n&lt;div&gt;#LI-TM1 #SEN&amp;nbsp;&lt;/div&gt;\n&lt;/div&gt;&lt;div class=&quot;content-pay-transparency&quot;&gt;&lt;div class=&quot;pay-input&quot;&gt;&lt;div class=&quot;description&quot;&gt;&lt;div&gt;\n&lt;div&gt;&lt;em&gt;*Note: Certain locations require a good faith disclosure of the base pay for the role. The actual base pay for the successful candidate may differ based on location and level.&lt;/em&gt;&lt;/div&gt;\n&lt;/div&gt;&lt;/div&gt;&lt;div class=&quot;title&quot;&gt;Gross pay salary&lt;/div&gt;&lt;div class=&quot;pay-range&quot;&gt;&lt;span&gt;$81,900&lt;/span&gt;&lt;span class=&quot;divider&quot;&gt;&amp;mdash;&lt;/span&gt;&lt;span&gt;$110,800 USD&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;",
      "departments": [
          {
              "id": 13547,
              "name": "Marketing & Communications",
              "child_ids": [],
              "parent_id": null
          }
      ],
      "offices": [
          {
              "id": 8816,
              "name": "USA-Austin",
              "location": "Austin, TX, USA",
              "child_ids": [],
              "parent_id": 18874
          }
      ]
  }

  it('should be defined', () => {
    expect(PositionCard).toBeDefined()
  })

  test('renders the position card', () => {
    render(
      <BrowserRouter>
        <Routes>   
          <Route path="*" element= {<PositionCard job={job} />}/>
        </Routes>
      </BrowserRouter>
    )

    const requisitionText = screen.getByText('Requisition ID: JOBREQ-2311340')
    const internalJobIdText = screen.getByText('Internal Job ID: 2643553')
    const jobURLText = screen.getByText('https://careers.unity.com/position?id=5273232&gh_jid=5273232')

    expect(requisitionText).toBeInTheDocument();
    expect(internalJobIdText).toBeInTheDocument();
    expect(jobURLText).toBeInTheDocument();

    expect(requisitionText).toHaveTextContent('Requisition ID: JOBREQ-2311340');
    expect(internalJobIdText).toHaveTextContent('Internal Job ID: 2643553');
    expect(jobURLText).toHaveTextContent('https://careers.unity.com/position?id=5273232&gh_jid=5273232');
  });
})
