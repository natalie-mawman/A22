import { DataTable, DateField, List, ReferenceField } from 'react-admin';
import { DateInput, Edit, NumberInput, ReferenceInput, SimpleForm, TextInput } from 'react-admin';
import { NumberField,  Show, SimpleShowLayout, TextField } from 'react-admin';


export const ReviewList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="user_id">
                <ReferenceField source="user_id" reference="Users" />
            </DataTable.Col>
            <DataTable.Col source="movie_id">
                <ReferenceField source="movie_id" reference="Movie" />
            </DataTable.Col>
            <DataTable.NumberCol source="rating" />
            <DataTable.Col source="comment" />
            <DataTable.Col source="review_date">
                <DateField source="review_date" />
            </DataTable.Col>
        </DataTable>
    </List>
);




export const ReviewEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="user_id" reference="Users" />
            <ReferenceInput source="movie_id" reference="Movie" />
            <NumberInput source="rating" />
            <TextInput source="comment" />
            <DateInput source="review_date" />
        </SimpleForm>
    </Edit>
);



export const ReviewShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <ReferenceField source="user_id" reference="Users" />
            <ReferenceField source="movie_id" reference="Movie" />
            <NumberField source="rating" />
            <TextField source="comment" />
            <DateField source="review_date" />
        </SimpleShowLayout>
    </Show>
);

export const ReviewCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="user_id" reference="Users" />
            <ReferenceInput source="movie_id" reference="Movie" />
            <NumberInput source="rating" />
            <TextInput source="comment" />
            <DateInput source="review_date" />
        </SimpleForm>
    </Create>
);