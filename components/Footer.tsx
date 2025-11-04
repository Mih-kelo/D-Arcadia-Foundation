export default function Footer() {
  return (
    <footer style={{ padding: '1rem', textAlign: 'center', borderTop: '1px solid #ccc', marginTop: 'auto' }}>
      <p>&copy; {new Date().getFullYear()} Your Foundation Name. All rights reserved.</p>
    </footer>
  );
}
