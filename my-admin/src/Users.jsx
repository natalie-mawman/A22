import { DataTable, DateField, List } from 'react-admin';
import { DateInput, Edit, SimpleForm, TextInput } from 'react-admin';
import { Show, SimpleShowLayout, TextField } from 'react-admin';

export const UserList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="Name" />
            <DataTable.Col source="Email" />
            <DataTable.Col source="Password" />
            <DataTable.Col source="Roles" />
            <DataTable.Col source="DateJoined">
                <DateField source="DateJoined" />
            </DataTable.Col>
        </DataTable>
    </List>
);



export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="Name" />
            <TextInput source="Email" />
            <TextInput source="Password" />
            <TextInput source="Roles" />
            <DateInput source="DateJoined" />
        </SimpleForm>
    </Edit>
);



export const UserShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="Name" />
            <TextField source="Email" />
            <TextField source="Password" />
            <TextField source="Roles" />
            <DateField source="DateJoined" />
        </SimpleShowLayout>
    </Show>
);

export const UserCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="Name" />
            <TextInput source="Email" />
            <TextInput source="Password" />
            <TextInput source="Roles" />
            <DateInput source="DateJoined" />
        </SimpleForm>
    </Create>
);