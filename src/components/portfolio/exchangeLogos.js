import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { flex, rem, mobile } from '../../styles/utils'
import GatsbyImg from 'gatsby-image'

const Wrapper = styled.div`
  ${flex}
  flex-wrap: wrap;
`

const Logo = styled.a`
  flex-basis: 25%;
  margin: ${rem(6)};

  ${mobile(css`
    flex-basis: 45%;
  `)}
`

const ExchangesLogos = ({ logos }) => (
  <Wrapper>
    {logos.map(logo => (
      <Logo
        key={logo.name}
        href={logo.link}
        title={logo.name}
      >
        <GatsbyImg
          alt={logo.name}
          title={logo.link}
          fluid={logo.image.fluid}
        />
      </Logo>
    ))}
  </Wrapper>
)

ExchangesLogos.propTypes = {
  logos: PropTypes.array.isRequired
}

export default ExchangesLogos
