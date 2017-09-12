import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Color from 'color'

const InformationWrapper = styled.section`padding: 150px 0;`

const InfoContent = styled.div`margin: 0 auto;`

const InfoTitle = styled.div.attrs({
  color: props => props.color || black,
  fontSize: props => props.color.fontSize || '1rem',
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

const InfoText = styled.div.attrs({
  color: props => props.color || 'black',
  fontSize: props => props.fontSize || '1rem',
  fontWeight: props => props.fontWeight || '400',
})`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
  margin: 1rem 5px;

  > p {
    margin: 0;
    min-height: 1.333em;
  }
`

const InfoTable = styled.ul`
  margin: 0;
  padding: 12px 20px;
  list-style: none;
  list-style-image: none;
  background: ${props => props.boxBackground};
`

const InfoRow = ({row, theme}) => (
  <InfoRowWrapper theme={theme}>
    <InfoRowTitle theme={theme}>{row.title}</InfoRowTitle>
    {row.text}
  </InfoRowWrapper>
)

InfoRow.propTypes = {
  row: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  theme: PropTypes.object.isRequired,
}

const InfoRowWrapper = styled.li.attrs({
  color: ({theme}) => theme.colors[theme.text.infoTableDesc.color] || theme.colors.text,
  fontSize: ({theme}) => theme.text.infoTableDesc.fontSize || '1rem',
  fontWeight: ({theme}) => theme.text.infoTableDesc.fontWeight || '400',
})`
  margin: 0;
  padding: 6px 0;
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
`

const InfoRowTitle = styled.strong.attrs({
  color: ({theme}) => theme.colors[theme.text.infoTableTitle.color] || theme.colors.text,
  fontSize: ({theme}) => theme.text.infoTableTitle.fontSize || '1rem',
  fontWeight: ({theme}) => theme.text.infoTableTitle.fontWeight || '400',
})`
  width: 140px;
  float: left;
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};

  @media (max-width: 70em) {
    display: block;
    width: auto;
    float: none;
  }
`

const InfoSub = styled.ul`
  margin: 40px 0 0;
  padding: 0;
  list-style: none;
  list-style-image: none;
  ${clearfix};
`

const InfoSubItem = ({row, theme, index}) => (
  <InfoSubItemWrapper theme={theme}>
    <InfoSubTitle theme={theme}>{row.title}</InfoSubTitle>
    {multiLine(row.text)}
    {row.buttons &&
      row.buttons.map &&
      row.buttons.map((btn, btnIdx) => (
        <Choose>
          <When condition={btn.link}>
            <a href={btn.link} key={`infosub-${index}-${btnIdx}`} target="_blank">
              <InfoButton theme={theme} isIconOnly={btn.text === ''}>
                <i className={btn.icon} />
                {btn.text}
              </InfoButton>
            </a>
          </When>
          <Otherwise>
            <InfoButton
              key={`infosub-${index}-${btnIdx}`}
              theme={theme}
              isIconOnly={btn.text === ''}>
              <i className={btn.icon} />
              {btn.text}
            </InfoButton>
          </Otherwise>
        </Choose>
      ))}
  </InfoSubItemWrapper>
)

InfoSubItem.propTypes = {
  row: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    buttons: PropTypes.array,
  }).isRequired,
  theme: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
}

const InfoSubItemWrapper = styled.li.attrs({
  color: ({theme}) => theme.colors[theme.text.infoSubDesc.color] || theme.colors.text,
  fontSize: ({theme}) => theme.text.infoSubDesc.fontSize || '1rem',
  fontWeight: ({theme}) => theme.text.infoSubDesc.fontWeight || '400',
})`
  box-sizing: border-box;
  float: left;
  width: 360px;
  padding-right: 20px;
  margin-bottom: 20px;
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};

  > p {
    margin: 0;
  }
`

const InfoSubTitle = styled.h3.attrs({
  color: ({theme}) => theme.colors[theme.text.infoSubTitle.color] || theme.colors.text,
  fontSize: ({theme}) => theme.text.infoSubTitle.fontSize || '1rem',
  fontWeight: ({theme}) => theme.text.infoSubTitle.fontWeight || '400',
  lineHeight: ({theme}) => theme.text.infoSubTitle.lineHeight || '1.333',
})`
  margin: 0 0 12px;
  padding: 0;
  list-style: none;
  list-style-image: none;
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  line-height: ${props => props.lineHeight};
  color: ${props => props.color};
`

const InfoButton = styled.button.attrs({
  color: ({theme}) => theme.colors[theme.text.infoButton.color] || theme.colors.text,
  fontSize: ({theme}) => theme.text.infoButton.fontSize || '1rem',
  fontWeight: ({theme}) => theme.text.infoButton.fontWeight || '400',
  lineHeight: ({theme}) => theme.text.infoButton.lineHeight || '1.333',
  backgroundColor: ({theme}) =>
    theme.colors[theme.text.infoButton.backgroundColor] || theme.colors.backgroundColor,
})`
  margin-top: 10px;
  margin-right: 10px;
  padding: ${props => (props.isIconOnly ? '0' : '0 20px')};
  min-width: 34px;
  height: 30px;
  font-family: inherit;
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  line-height: ${props => props.lineHeight};
  color: ${props => props.color};
  border: 0;
  border-radius: 18px;
  background-color: ${props => props.backgroundColor};
  cursor: pointer;
  transition: background-color 0.5s;

  &:hover {
    background-color: ${props =>
      Color(props.backgroundColor)
        .lighten(0.1)
        .string()};
  }

  > i {
    margin-right: ${props => (props.isIconOnly ? '0' : '7px')};
    vertical-align: 0;
    line-height: ${props => props.lineHeight};
  }
`

const Information = ({title, text, table, contact, theme}) => (
  <InformationWrapper>
    <InfoContent>
      <If condition={title}>
        <InfoTitle theme={theme}>{title}</InfoTitle>
      </If>
      <If condition={text}>
        <InfoText theme={theme}>{multiLine(text)}</InfoText>
      </If>
      <If condition={table.length}>
        <InfoTable theme={theme}>
          {table.map((row, index) => <InfoRow row={row} theme={theme} key={`info-${index}`} />)}
        </InfoTable>
      </If>
      <If condition={contact.length}>
        <InfoSub theme={theme}>
          {contact.map((row, index) => (
            <InfoSubItem row={row} theme={theme} key={`infosub-${index}`} index={index} />
          ))}
        </InfoSub>
      </If>
    </InfoContent>
  </InformationWrapper>
)

Information.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  table: PropTypes.array,
  contact: PropTypes.array,
  theme: PropTypes.object.isRequired,
}

Information.defaultProps = {
  table: [],
  contact: [],
}

export default Information
