// pages/api/setup.sh.js

export default function SetupSh(req, res) {
  res.writeHead(302, {
    'Location': 'https://raw.githubusercontent.com/0xStabby/.config/master/setup.sh',
  });
  res.end();
}
