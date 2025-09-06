import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchGroup: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#fff",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  searchControl: {
    backgroundColor: "transparent",
    fontSize: 14,
    color: "#666",
    paddingVertical: 8,
    paddingHorizontal: 0,
  },
  searchButton: {
    backgroundColor: "#34967C",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
  },
  filterGroup: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 16,
  },
  filterContainer: {
    alignItems: "center",
    width: 80,
    height: 52,
    justifyContent: "space-between",
    paddingVertical: 4,
  },
  listingContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  paginationContainer: {
    alignItems: "center",
    paddingVertical: 20,
    paddingBottom: 40,
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 25,
  },
  showMoreButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export { styles };