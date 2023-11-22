import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import pkg from "firebase-admin";
const FB_PROJECT_ID = "fireship-sveltekit-77936";
const FB_CLIENT_EMAIL = "firebase-adminsdk-uy56u@fireship-sveltekit-77936.iam.gserviceaccount.com";
const FB_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC4Ks4DG+PEmdIg\nc0H7hq5pfhPVJ2dTV+aLlpGxwc03dVDWD6ibT36yiJBDNYs9XL0DgsRuhpaU/SD5\nwm4+6peVDKQBzR2srwH/BiwVCIMk/GVCW5e2VEGjRiWnaSEGjuFUzr46HJq5/sA0\nE9ryOLQMOX8/qKRGJN9OKfKELgv7DpHvAgKJrgvM8+C6kVSmxrFK0dLD77wjBDOK\npjMaNYHW3lDaXhlQ80beRQ69i2Oq1Iwi3QRRzk0fLhb5seFnyEi1/0/TQZCKXIdy\no4N1OtHpXfP17ntUyiK9bbz2aJvtRKDiAOpiXskr3kqe5LLUX4kicMMGJmtQwV24\n3kEpbJiDAgMBAAECggEAA4UJ5+ROD5FTAzzAq5Jw3eJDdcTphB2/cbaAdVG7Xs52\nq4ikE8fKp5XVj/tDfHo7wIfswiH/WbyWtz9AhSJNoFMcBU7KvOShWKLhD8vYWcob\nE1AVz62/jWPHT3JCZ9IuO0UyPIEUce6M9NHWUt/DjSJCLNDHxvFodSF3GZCZuQQP\ncMnrOre5R/kOnefLX+o8Y4cwWh7odXizmOlYT1ZmCtawUaO1Q8IH91sf2sL7ofrk\n4ueHZBpiZalNQJv3ZBDxDW9MbfbK8VTeLf87/xZLjh1n5ATUYB0P1B51xcVQYeEa\nRVpGOJgxB6RnTVnSy5z9FOmzBp3VXkODGzcC9ZBpSQKBgQDsG6hYxveZr5Msrhfw\nQ69uBRQEPR0VHPJR2aAkaI7GAUg1OI4l25dOVQP5YSy/YC5hX4r/7AvKJ/PZvjXO\n/Iw3JCmF+2rMmsJYpEDuf+kSC/jHjg6XySt7M5XGGwysywBVrCy7vUompjirjdoF\nKOWlLUo1/b+p6uq+D4TdODtJaQKBgQDHruUoC+Tx69iPeGkwH1AFfgkMFlrCvku1\n05PcEeB/sd9zwoJndRgrWbb5YevlznnXaZwmmybeHWhzAWSRIoFvaRbqL3ox+af6\nGdKxGTuLQKKXhauwQTvyAIkxknnYnH7sYcOCXq+JuPZ4LiRMsvsGnz+0G/MSucPy\nzWZvk7XJCwKBgBtWSHOe9eQRdBTkQ1lKPPGcHOkwukFLjLL1Y5lTkdRTKa0f0zWG\n60nihgdFvQybckNL8KgZCHRrk8xOPaStkP6BbV1Z8s+ly4K/4dS7cpzoTfGs/PuO\nCz7Ehj7duuX2yx8gRD2oeQFolX8neWrHhW9Ogx0lOB/QV0WSPmvuqs6hAoGBAJ6J\nxJUsBGTzDKi0QEedxMnnjEVVhk/yCGhfiJiEdQrNbY0aFLERbdQVUcnkLgfyDBi0\nV+7q5kwZazFMHM2CaOPMuw3KDimZfv15/Sbw0q637Z+B2JOC55Y3SLXcBvOtJLSG\n1lQu2w3slXtLnzRqMhXK4CgevLnUVbfzzm2uB/mLAoGAKZf4u+VZ78XN7kpA94Ln\n22665mtMg1l0+XbKqT/7l2o8EmIobjyMIYdbSj+wmNfvbPpBJCAILuk0BtfaaoOA\nCJ55UkdOWSuloa5lv/4wqIFof5gc3M2oOde3dHgsZrOIRqVr/MEqsNnvofS0zUMv\nqq961Tqm884BwwJbTeBpzes=\n-----END PRIVATE KEY-----\n";
try {
  pkg.initializeApp({
    credential: pkg.credential.cert({
      projectId: FB_PROJECT_ID,
      clientEmail: FB_CLIENT_EMAIL,
      privateKey: FB_PRIVATE_KEY
    })
  });
} catch (err) {
  if (!/already exists/u.test(err.message)) {
    console.error("Firebase Admin Error: ", err.stack);
  }
}
const adminDB = getFirestore();
const adminAuth = getAuth();
export {
  adminAuth as a,
  adminDB as b
};
