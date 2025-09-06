import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchGroup: {
    padding: 16,
    backgroundColor: "#fff",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchControlGroup: {
    flex: 1,
  },
  searchControl: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
  },
  searchFormText: {
    fontSize: 16,
    color: "#333",
  },
  searchButton: {
    backgroundColor: "#34967C",
    padding: 12,
    borderRadius: 8,
    marginLeft: 8,
  },
  filterGroup: {
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  filterContainer: {
    alignItems: "center",
    marginRight: 16,
  },
  listingContainer: {
    padding: 16,
  },
  paginationContainer: {
    marginVertical: 16,
    alignItems: "center",
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  showMoreButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export { styles };