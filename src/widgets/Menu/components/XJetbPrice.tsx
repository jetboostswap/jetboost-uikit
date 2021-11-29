import React from "react";
import styled, { useTheme } from "styled-components";
import { XJetbIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  xJetbPriceUsd?: number;
  isDark?: boolean;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const XJetbPrice: React.FC<Props> = ({ xJetbPriceUsd, isDark }) => {
  
  return xJetbPriceUsd ? (
    <PriceLink href="https://poocoin.app/tokens/0x90ad5433fb7b70e04244824d825a98ed013477de" target="_blank">
      <XJetbIcon width="24px" mr="8px" />
      <Text color={isDark ? "textSubtle" : "#c3c350"} bold>{`$${xJetbPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(XJetbPrice);
