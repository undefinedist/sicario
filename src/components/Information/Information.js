import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Color from 'color'
import MultiLineText from '../MultiLineText'

const InformationWrapper = styled.section`padding: 150px 0;`

const InfoContent = styled.div`margin: 0 auto;`

const InfoTitle = styled.div.attrs({
  color: props => props.color || 'black',
  fontSize: props => props.fontSize || ['1rem'],
  fontWeight: props => props.fontWeight || '400',
})`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};

  margin-bottom: 2rem;
  > p {
    margin: 0;
  }
`

const InfoText = styled.div.attrs({})``

const Information = ({titleText, descriptionText, title, description}) => (
  <InformationWrapper>
    <InfoContent>
      <InfoTitle {...title}>{titleText}</InfoTitle>
      <MultiLineText multiLineText={descriptionText} {...description} />
      {/*
      <InfoTable theme={theme}>
        {table.map((row, index) => <InfoRow row={row} theme={theme} key={`info-${index}`} />)}
      </InfoTable>
      <InfoSub theme={theme}>
        {contact.map((row, index) => (
          <InfoSubItem row={row} theme={theme} key={`infosub-${index}`} index={index} />
        ))}
      </InfoSub>
      */}
    </InfoContent>
  </InformationWrapper>
)

Information.propTypes = {
  titleText: PropTypes.string.isRequired,
  title: PropTypes.shape({
    fontSize: PropTypes.array,
    color: PropTypes.string,
    bold: PropTypes.string,
  }),
  descriptionText: PropTypes.string.isRequired,
  description: PropTypes.shape({
    fontSize: PropTypes.array,
    color: PropTypes.string,
    bold: PropTypes.string,
  }),
}

Information.defaultProps = {
  titleText: 'INFORMATION',
  descriptionText: 'fhlahfl\nfjaldsfj',
}

export default Information
