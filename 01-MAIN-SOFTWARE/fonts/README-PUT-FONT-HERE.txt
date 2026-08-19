এখানে আপনার LiAdorNodi.woff2 ফাইলটা রাখুন।

ফাইলের নাম exactly এটাই হতে হবে: LiAdorNodi.woff2
পুরো path হবে: public/fonts/LiAdorNodi.woff2

ফাইল বসানোর পর:
  npm run build

চালালেই পুরো ওয়েবসাইটে এই ফন্ট এপ্লাই হয়ে যাবে (app/globals.css এ
ইতিমধ্যে @font-face + font-family সেট করা আছে)।

যদি আপনার কাছে শুধু .ttf/.otf থাকে, .woff2 না — তাহলে বলুন, আমি
convert করে দিতে পারব (fonttools ব্যবহার করে)।
