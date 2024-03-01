export default function ReactChallengeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        height: "100%",
        flexDirection: "column",
        gap: 8,
      }}
    >
      {children}
    </main>
  );
}
