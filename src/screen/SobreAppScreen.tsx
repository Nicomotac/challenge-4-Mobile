
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

import Text from '../components/ThemedText';
import { useTema } from '../Theme/themeContext';

export default function SobreAppScreen() {
  const { cores } = useTema();

  const versao = Constants.expoConfig?.version ?? 'Não informada';

  const commitHash = String(
    Constants.expoConfig?.extra?.commitHash ?? 'indisponível'
  );

  const styles = StyleSheet.create({
    pagina: {
      flex: 1,
      backgroundColor: cores.fundo,
    },
    conteudo: {
      padding: 24,
    },
    titulo: {
      fontSize: 26,
      fontWeight: 'bold',
      marginBottom: 24,
    },
    card: {
      backgroundColor: cores.superficie,
      padding: 20,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: cores.borda,
    },
    rotulo: {
      fontSize: 14,
      fontWeight: 'bold',
      marginTop: 16,
      marginBottom: 6,
    },
    hash: {
      fontSize: 12,
    },
    rodape: {
      marginTop: 24,
      textAlign: 'center',
    },
  });

  return (
    <ScrollView style={styles.pagina}>
      <View style={styles.conteudo}>
        <Text style={styles.titulo}>Sobre o App</Text>

        <View style={styles.card}>
          <Text style={styles.rotulo}>Aplicativo</Text>
          <Text>Clyvo PetCare</Text>

          <Text style={styles.rotulo}>Versão</Text>
          <Text>{versao}</Text>w
        </View>

        <Text style={styles.rodape}>
          FIAP — Challenge 2026 — Sprint 4
        </Text>
      </View>
    </ScrollView>
  );
}
