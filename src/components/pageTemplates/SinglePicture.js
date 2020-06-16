import React from 'react';
import styled from 'styled-components';
import editHandler from './editHandler';
import SiteContext from '../../model/SiteContext';
import uploadImageHandler from './uploadImageHandler';

const OurText = styled.textarea`
  font-family: 'Short Stack', cursive;
  font-size: 2vh;
  width: 100%;
  resize: none;
  border: 0;
`;

const OurPic = styled.img`
  width: 100%;
  max-height: 60%;
  object-fit: contain;
`;

function SinglePicture({ pageNumber, fields }) {
  const [, dispatch] = React.useContext(SiteContext);
  return (
    <>
      <OurPic
        src={fields.pic1}
        id="pic1"
        onClick={(e) => uploadImageHandler(e, pageNumber, dispatch)}
      ></OurPic>
      <OurText
        id="text1"
        value={fields.text1}
        onChange={(e) => editHandler(e, pageNumber, dispatch)}
      ></OurText>
    </>
  );
}

SinglePicture.fields = {
  pic1:
    'https://res.cloudinary.com/didur5psx/image/upload/v1591714780/starting_school/yourpic_rjemqq.jpg',
  text1: 'Click to edit text',
};

export default SinglePicture;