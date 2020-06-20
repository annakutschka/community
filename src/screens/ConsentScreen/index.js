import React from 'react';
import { SafeAreaView, Text, StyleSheet, ScrollView } from 'react-native';
import Colors from '../../constants/Colors';
import HeaderIcon from '../../components/HeaderIcon';
import Layout from '../../constants/HeaderLayout';

export default class ConsentScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Datenschutzerklärung',
      headerStyle: { ...Layout.headerLayout },
      headerTitleStyle: { ...Layout.titleRight },
      headerTitleContainerStyle: { ...Layout.titleContainerRight },
      headerLeft: (
        <HeaderIcon
          name="arrow-round-back"
          dual={true}
          color="#000"
          left={true}
          size={40}
          onPress={() => navigation.navigate('Login')}
        />
      ),
      headerLeftContainerStyle: { ...Layout.iconContainerLeft }
    };
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.innerContainer}>
          <Text style={styles.text}>
            Damit du unsere App verwenden kannst, brauchen wir deine Daten.
            Dabei speichern wir nur die folgenden Daten ab:
          </Text>
          <Text style={styles.text}> * Email-Adresse </Text>
          <Text style={styles.text}> * Vor- und Nachname </Text>
          <Text style={styles.text}>
            {' '}
            * die URL deines Profilbildes vom jeweiligen Anmelde-Anbieter
          </Text>
          <Text style={styles.text}>
            {' '}
            * Alle erstellen Posts und Mitteilungen sowie alle von dir
            geschriebenen Kommentare und Chat-Nachrichten.{' '}
          </Text>
          <Text style={styles.text}>
            Die Daten werden auf einem Firebase Server in England gespeichert.
          </Text>
          <Text style={styles.text}>
            Durch das Löschen deines Profils werden alle deine Daten und die von
            dir erstellten Posts, Mittelungen, Kommentare sowie Chat-Nachrichten
            gelöscht.
          </Text>
          <Text style={styles.text}>
            Um dir einen möglichst angenehmen Anmeldeprozess zu bieten, nutzen
            wir Google und Facebook für die Authentifizierung. Wir können nicht
            auf die Daten dieser Anbieter (bis auf die oben genannten) zugreifen
            oder in deinem Namen etwas posten. Die Datenschutzerklärungen für
            die Anmeldeanbieter, Facebook und Google, findest du beim jeweiligen
            Anmeldeprozess auf deren Website.
          </Text>
          <Text style={styles.text}>
            Bei Fragen zum Datenschutz kannst du dich an Marion Menzl
            (marion.menzl@gmail.com) melden.
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 15,
    backgroundColor: Colors.backgroundColor
  },
  innerContainer: {
    flex: 1,
    margin: 15,
    padding: 10,
    borderRadius: 3,
    backgroundColor: Colors.white
  },
  header: {
    fontWeight: 'bold',
    color: Colors.lightColorTwo,
    fontSize: 24,
    paddingTop: 10
  },
  text: {
    color: Colors.text,
    fontSize: 16,
    marginBottom: 10
  }
});
