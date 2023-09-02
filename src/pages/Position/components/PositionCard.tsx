import styled from 'styled-components';
import classnames from 'classnames'
import { CardContent, Typography } from '@mui/material'
import { Card } from '../../../components';

const StyledPositionCard = styled.div`
  .single-job-card {
    background-color: #FFFFFF;
    border-radius: 8px;
    display: flex;
    height: max-content;
    padding: 2rem;
    width: 100%;
  }
`;

const PositionCard = ({ className, job }: any) => {
  const { absolute_url = '', content = '', internal_job_id = '', location = {}, requisition_id = '', title = '', updated_at = ''} = job;

  const decode = (str: string) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = content;
    return txt.value;
  }

  const cardContent = (
    <CardContent>
      <Typography component={'span'}>
        <h2><strong>{`${title}`}</strong></h2>
      </Typography>
      <Typography>
        <span>{`${location.name}`}</span>
      </Typography>
      <div className='margin-top'>
        <Typography>
          <span><small>{`Requisition ID: ${requisition_id}`}</small></span>
        </Typography>
        <Typography>
          <span><small>{`Internal Job ID: ${internal_job_id}`}</small></span>
        </Typography>
        <Typography>
          <span><small>{`Last Upated: ${new Date(updated_at).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) }`}</small></span>
        </Typography>
      </div>
      <Typography className='margin-top'>
        Link: <a href={absolute_url} rel="noreferrer" target='_blank'>{absolute_url}</a>
      </Typography>
      <Typography className='margin-top' dangerouslySetInnerHTML={{__html: decode(content)}} />
    </CardContent>
  )

  return (
    <StyledPositionCard className='flex-column'>
      <Card className={classnames(className, 'single-job-card')} content={cardContent} />
    </StyledPositionCard>
  )
}

export default PositionCard
