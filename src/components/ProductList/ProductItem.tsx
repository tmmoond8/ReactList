/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { colors } from '../../styles';

interface ProductItemProps {
  title: string;
  wish: boolean | null;
  toggleWish: () => void;
  removeWish: () => void;
  thumbnail: string;
  price: number;
}

export default function ProductItem(props: ProductItemProps): JSX.Element {
  const { title, wish, toggleWish, removeWish, thumbnail, price } = props;
  return (
    <Item>
      <Thumbnail src={thumbnail} />
      <Contents>
        <h3>{title}</h3>
        <p>{price.toLocaleString()}원</p>
      </Contents>
      {wish !== null && (
        <ActionButton onClick={toggleWish}>{wish ? '💙' : '🤍'}</ActionButton>
      )}
      {wish === null && <ActionButton onClick={removeWish}>❌</ActionButton>}
    </Item>
  );
}

const Item = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const Thumbnail = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 98px;
  padding: 16px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border: 1px solid ${colors.blackA20};
  border-top: 0 solid red;

  h3 {
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-height: 22px;
  }

  p {
    font-size: 14px;
    color: ${colors.blackA70};
  }
`;
const ActionButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 24px;
  color: white;
  cursor: pointer;
`;
