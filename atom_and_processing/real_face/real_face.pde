import gab.opencv.*;
import java.awt.Rectangle;

OCascadeClassifier face_cascade;

bool myDetector( IArray image, Array ROIs ){
    Mat gray;
    std::vector<Rect> faces;
    if(image.channels()>1){
        cvtColor(image.getMat(),gray,CV_BGR2GRAY);
    }
    else{
        gray = image.getMat().clone();
    }
    equalizeHist( gray, gray );
    face_cascade.detectMultiScale( gray, faces, 1.1, 3,0, Size(30, 30) );
    Mat(faces).copyTo(ROIs);
    return true;
}