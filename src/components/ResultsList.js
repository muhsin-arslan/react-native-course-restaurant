import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultsDetail from "../components/ResultsDetail";

const ResultsList = ({ header, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{header}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultsDetail result={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 10,
  },
});

export default ResultsList;
