import { DataTable, List } from 'react-admin';
import { Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';
import { NumberField, Show, SimpleShowLayout, TextField } from 'react-admin';

const movieFilters = [
    <TextInput label="Search for Title" source="title" alwaysOn />,
    <TextInput label="Search for ID" source="id" />,
];

export const MovieList = () => (
    <List filters={movieFilters}>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="title" />
            <DataTable.Col source="genre" />
            <DataTable.NumberCol source="release_year" />
        </DataTable>
    </List>
);



export const MovieEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="genre" />
            <NumberInput source="release_year" />
        </SimpleForm>
    </Edit>
);



export const MovieShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="genre" />
            <NumberField source="release_year" />
        </SimpleShowLayout>
    </Show>
);

export const MovieCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="genre" />
            <NumberInput source="release_year" />
        </SimpleForm>
    </Create>
);