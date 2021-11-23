import * as C from './styles';
import { formartDate } from '../../helpers/dataFilter';
import { categories } from '../../data/categories';

export const TableItem = ({ item }) => {
    return(
        <C.TableLine>
            <C.TableColumn>{formartDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.value}
                </C.Value>
            </C.TableColumn>
        </C.TableLine>
    );
};
