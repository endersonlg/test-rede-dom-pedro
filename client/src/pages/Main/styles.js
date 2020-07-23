import styled from 'styled-components';

export const Container = styled.div`

`;

export const Header = styled.div`
  display:flex;
  flex:1;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  img{
    width:200px;
    height:200px;
    border-right:solid 1px #999;
    margin-right:10px;
  }

  strong{
    font-size:32px;
    color:#121212;
  }
`;

export const Content = styled.div`
  display:flex;
  flex:1;
  flex-direction:row;
  align-items:initial;
  justify-content:center;
  margin-top:20px;
`;

export const Register = styled.div`
  text-align:center;
  padding-right:20px;
  margin-right:20px;
  border-right:solid 1px #999;

  strong{
    font-size:32px;
    color:#121212;
  }

  form{
    display: flex;
    flex-direction: column;

    input{
      border: 0;
      border-radius: 4px;
      background:#CCC;
      height: 44px;
      width:200px;
      padding: 0 15px;
      margin: 0 0 10px;
    }

    button{
      margin-top: 10px;
      height: 42px;
      width:200px;
      border: 1px solid rgba(255, 255, 255, 0.7);
      border-radius: 20px;
      background: #323232;
      font-weight: 500;
      font-size: 21px;
      color:#EEE;
      transition: 0.2s background;

      &:hover {
        background: #CCC;
        color: #060055;
        border: 1px solid #323232;
    }
  }
`;

export const Informations = styled.div`
margin-left:20px;
strong{
    font-size:32px;
    color:#121212;
  }
table,th,td{
  border:solid 1px  #323232;
  border-collapse: collapse;
}
  table{
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-spacing: 0px;

    tr {
      height: 48px;
    }
    thead {
      th {
        color: #000;
        padding: 0px 20px;
      }
    }
    tbody {
      td {
        font-weight: bold;
        padding: 0px 20px;
      }
  }
`;
