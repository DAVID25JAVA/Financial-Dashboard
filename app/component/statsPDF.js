import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  statBox: {
    width: "32%",
    backgroundColor: "#f9fafb",
    borderRadius: 8,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  },
  iconContainer: {
    marginRight: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
  content: {
    flexGrow: 1,
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#374151",
    marginBottom: 4,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#d1d5db",
    marginVertical: 4,
  },
  value: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#6b7280",
  },
});

const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

export function StatsDocument({ stats }) {
  const rows = chunkArray(stats, 3);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Stats Report</Text>

        {rows.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((stat, i) => (
              <View key={i} style={styles.statBox}>
                <View style={styles.iconContainer}>
                  <Image src={stat.icon} style={styles.icon} alt="Company Logo" width={40} height={40} />
                </View>
                <View style={styles.content}>
                  <Text style={styles.label}>{stat.label}</Text>
                  <View style={styles.divider} />
                  <Text style={styles.value}>{stat.value}</Text>
                </View>
              </View>
            ))}
            {row.length < 3 &&
              Array(3 - row.length)
                .fill(null)
                .map((_, idx) => (
                  <View
                    key={"empty-" + idx}
                    style={[
                      styles.statBox,
                      { backgroundColor: "transparent", boxShadow: "none" },
                    ]}
                  />
                ))}
          </View>
        ))}
      </Page>
    </Document>
  );
}
