import { View, TextInput, StyleSheet, Text, FlatList } from 'react-native';


//theme
import useThemedStyles from "../../styles/theme/useThemedStyles";
import { styles } from "../../styles/styles";

// Layout
import Fetching from '../../layout/message_fetching';
import Error from '../../layout/message_error';


import { useQuery } from "@apollo/client";
import { GET_FIELD } from '../../gql/queries';

export default function FieldDetailsScreen({ route, navigation }) {
    const { id } = route.params;
    const { data, loading, error } = useQuery(GET_FIELD, { variables: {id}});
    const style = useThemedStyles(styles);
    // insert
    /*const [ insertStudent ] = useMutation(INSERT_STUDENT, {
      refetchQueries: [
        {query: GET_STUDENTS }
      ],
    });*/
  
    // delete
    /*const [ deleteStudent ] = useMutation(DELETE_STUDENT, {
      refetchQueries: [
        {query: GET_STUDENTS }
      ],
    });*/
  
  
    /*function handleInsert() {
      insertStudent({ variables: { firstname: student.firstname, 
      lastname: student.lastname } });
      navigation.goBack();
    }
  
    function handleUpdate() {
      updateStudent({ variables: { id: student.id,
      firstname: student.firstname, 
      lastname: student.lastname } });
      navigation.goBack();
    }
  
    function handleDelete() {
      deleteStudent({ variables : 
      { id: student.id } });
      navigation.goBack();
    }*/
  
    if (loading) return <Fetching message="Fetching data..." />
    if (error) return <Error error={error} />
    

    console.log(data.field);
    /*function handleChangeFirstname(value) {
      setStudent({ ...student, firstname: value });
    }
  
    function handleChangeLastname(value) {
      setStudent({ ...student, lastname: value });
    }*/

  return (
    <View style={style.body}>
      <Text style={style.name}>{data.field[0].name}</Text>
      <Text></Text>
      
    </View>
  );
};
