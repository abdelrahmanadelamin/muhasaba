// =====================================================================
//  إعداد متابعة العيلة (Firebase)
//  اتركه null لو عايز التطبيق يشتغل على الموبايل بس من غير متابعة مباشرة.
//  لتفعيل المتابعة: امسح السطر اللي فيه null وحط مكانه بيانات مشروعك من
//  Firebase Console > Project settings > Your apps > Web app > SDK setup (Config)
//  الخطوات كاملة في ملف README.md
// =====================================================================

window.FIREBASE_CONFIG = null;

/* مثال بعد التفعيل (القيم دي وهمية):
window.FIREBASE_CONFIG = {
  apiKey: "AIza...",
  authDomain: "muhasaba-family.firebaseapp.com",
  projectId: "muhasaba-family",
  storageBucket: "muhasaba-family.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456"
};
*/
