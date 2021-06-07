// import React from 'react';

// import './Button.css';
import styled from 'styled-components';

const Button = styled.button`
  font: inherit;
  width: 100%;
  padding: 0.5rem 1.5rem;
  border: 1px solid #330fb69f;
  color: white;
  background: #330fb69f;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;


@media (min-width: 768px) {
    width: auto;
}

&:focus {
  outline: none;
}

&:hover,
&:active {
  background: #ac0e77;
  border-color: #ac0e77;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
}
`;

// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;
