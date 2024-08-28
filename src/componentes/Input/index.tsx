import styled from "styled-components";

// Define o styled component para o input
const Input = styled.input`
    background-color: transparent; /* Cor de fundo transparente */
    color: orange; /* Cor do texto do input */
    border: 1px solid orange; /* Borda de 1px */
    font-size: 20px; /* Ajuste o tamanho da fonte conforme necessário */
    border-radius: 30px; /* Adiciona bordas arredondadas, opcional */
    outline: none; /* Remove o contorno padrão ao focar no input */
    width: 30%; /* Define a largura como 50% do contêiner pai */
    height: 20%; /* Define a altura do input */
    text-align: center;
    padding: 1em 9em;

    &::placeholder {
        color: orange; /* Cor do texto do placeholder */
        padding: 1em;
    }

    /* Adiciona uma transição suave para a borda e o fundo, opcional */
    transition: border-color 0.3s ease, background-color 0.3s ease;

    &:focus {
        border-color: lightgray; /* Cor da borda ao focar no input, opcional */
    }

    transition: transform 0.3s ease; /* Adiciona uma transição suave para as mudanças */


    &:hover {
        transform: scale(1.05);
        cursor: pointer; /* Muda o cursor para indicar que o elemento é interativo */
        
    }
`;

// interface InputProps {
//     placeholder: string;
//     onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void; // Adiciona onBlur como uma propriedade opcional
// }

// // Define o componente Input como uma função que aceita props do tipo InputProps
// const Input: React.FC<InputProps> = ({ placeholder, onBlur }) => {
//     return (
//         <Campo_Input
//             placeholder={placeholder}
//             onBlur={onBlur} // Passa o manipulador onBlur para o Campo_Input
//         />
//     );
// }

export default Input;