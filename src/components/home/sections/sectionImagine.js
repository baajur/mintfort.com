import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import GatsbyImg from 'gatsby-image'
import Fade from 'react-reveal/Fade'

import { flex, phone, rem } from '../../../styles/utils'

import SectionText from '../../shared/sectionText'
import DividerStart from '../../backgrounds/start'
import LinesDivider from '../../backgrounds/linesDivider'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  transition: height .2s;

  ${flex}
`

const ImageWrapper = styled.div`
  width: ${rem(300)};
  margin-top: 20px;

  ${phone(css`
    width: ${rem(200)};
  `)}
`

const SectionGirl = ({ images }) => (
  <Wrapper>
    <LinesDivider style={{
      marginBottom: 100
    }}/>
    <ImageWrapper>
      <Fade>
        <GatsbyImg
          alt='Mintfort app'
          title='Mintfort app'
          fluid={images[0].fluid}
        />
      </Fade>
      <DividerStart style={{ zIndex: 1 }}/>
    </ImageWrapper>
  </Wrapper>
)

SectionGirl.propTypes = {
  images: PropTypes.array.isRequired
}

const SectionImagine = props => (
  <div id={"imagine"}>
    <SectionText
      {...props}
      padding={'14vh 0 4vh'}
    />
    <SectionGirl
      images={props.images}
    />
  </div>
)

export default SectionImagine
