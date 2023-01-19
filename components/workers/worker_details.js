import { View, TextInput, StyleSheet, Text } from 'react-native';
import { Button } from '@rneui/themed';
import { Icon } from "@react-native-material/core";

//theme
import useThemedStyles from "../../styles/theme/useThemedStyles";
import { styles } from "../../styles/styles";

// Layout
import Fetching from '../../layout/message_fetching';
import Error from '../../layout/message_error';

// Apollo and queries
import { useQuery } from "@apollo/client";
import { GET_WORKER_DETAILS } from '../../gql/queries';

export default function WorkerDetailsScreen({ route, navigation }) {
    const { id } = route.params;
    const { data, loading, error } = useQuery(GET_WORKER_DETAILS, { variables: {id}});
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
    

    console.log(data.worker[0].name);
    console.log(id);
    /*function handleChangeFirstname(value) {
      setStudent({ ...student, firstname: value });
    }
  
    function handleChangeLastname(value) {
      setStudent({ ...student, lastname: value });
    }*/

  return (
    <View style={style.body}>
      <Text style={style.name}>{data.worker[0].name}</Text>
      <Text style={style.text}><Icon name='home' style={style.icon}/>{data.worker[0].city}</Text>
      <Text style={style.sectionHeader}>Contact information:</Text>
      <Text style={style.text}><Icon name='phone' style={style.icon}/> {data.worker[0].phonenumber}</Text>
      <Text style={style.text}><Icon name='email' style={style.icon}/> {data.worker[0].email}</Text>
      <Text style={style.sectionHeader}>Extra information:</Text>
      <Text style={style.text}><Icon name='bullhorn-outline' style={style.icon}/> {data.worker[0].language}</Text>
      <Text style={style.text}><Icon name='card-account-details-outline' style={style.icon}/> {data.worker[0].country}</Text>
    </View>
  );
};

const pageStyles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15
  },
});