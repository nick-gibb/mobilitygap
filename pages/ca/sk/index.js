import Report from "../../../components/layout/reports";

export default function Sk() {
  const mobility = Math.floor(Math.random() * 100) + 1;
  const mobility_threshold = Math.floor(Math.random() * 100) + 1;
  const mobility_gap = mobility - mobility_threshold;
  const mobility_gap_sign = mobility_gap <= 0 ? "red" : "green";
  return (
    <Report
      region="Saskatchewan"
      country="Canada"
      mobility={mobility}
      mobility_threshold={mobility_threshold}
      mobility_gap={mobility_gap}
      mobility_gap_sign={mobility_gap_sign}
    />
  );
}
