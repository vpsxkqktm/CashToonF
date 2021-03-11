// 이미지를 DB에서 받아올 때 만들/사용할 예정

import React from "react";
import styled from "styled-components/native";

const Image = styled.Image``;

const Thumbnail = ({ url }) => <Image source={{ uri: url }} />;

export default Thumbnail;
