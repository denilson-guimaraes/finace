import * as C from './styles';

export const AddArea = ({ addItemToList }) => {
    return(
        <C.Form>
            <C.LabelForm >
                <span>Data</span>
                <C.InputForm type="date" name="date" id="dateForm" />
            </C.LabelForm>
            <C.LabelForm >
                <span>Categoria</span>
                <C.Select name="categories" id="selectForm">
                    <option value="food">Alimentação</option>
                    <option value="rent">Aluguel</option>
                    <option value="salary">Salário</option>
                </C.Select>
            </C.LabelForm>
            <C.LabelForm >
                <span>Titulo</span>
                <C.InputForm type="text" name="title" id="titleForm" />
            </C.LabelForm>
            <C.LabelForm >
                <span>Valor</span>
                R$ 
                <C.InputForm type="number" name="value" id="valueForm" />
            </C.LabelForm>
            <C.BtnForm type="button" onClick={addItemToList} >Adicinar</C.BtnForm>
        </C.Form>
    );
};
