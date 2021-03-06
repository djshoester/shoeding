﻿#pragma strict

// The target we are following
var target: Transform;
// The distance in the x-z plane to the target
var distance: float = 5.0;
// the height we want the camera to be above the target
var height: float = 5.0;
// How much we 
var heightDamping: float = 2.0;
var rotationDamping: float = 0.6;


function LateUpdate (){
    // Early out if we don't have a target
    //if (TargetScript.russ == true){
	    if (!target)
	        return;

	    // Calculate the current rotation angles
	    var wantedRotationAngle = target.eulerAngles.y;
	    var wantedHeight = target.position.y + height;

	    var currentRotationAngle = transform.eulerAngles.y;
	    var currentHeight = transform.position.y;

	    // Damp the rotation around the y-axis
	    currentRotationAngle = Mathf.LerpAngle (currentRotationAngle, wantedRotationAngle, rotationDamping * Time.deltaTime);

	    // Damp the height
	    currentHeight = Mathf.Lerp (currentHeight, wantedHeight, heightDamping * Time.deltaTime);

	    // Convert the angle into a rotation
	    var currentRotation = Quaternion.Euler (0, currentRotationAngle, 0);

	    // Set the position of the camera on the x-z plane to:
	    // distance meters behind the target
	    transform.position = target.position;
	    transform.position -= Vector3.forward * distance;

	    // Set the height of the camera
	    transform.position.y = currentHeight;

	    // Always look at the target
	    transform.LookAt (target);
	//}
}