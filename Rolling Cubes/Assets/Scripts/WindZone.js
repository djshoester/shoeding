#pragma strict
var thrust: float;
var radius: float;
var direction: Vector3;


function FixedUpdate () {	
	
	var center: Vector3 = transform.position;	
	WindThrust(center, radius);
	print(center);
//	var movement: Vector3 = new Vector3(moveHorizontal * thrust, 0, moveVertical * thrust);
//	
//	if(rb.velocity.z < maxspeed)
//	{
//		rb.AddForce(movement);
//	}
//	print(rb.velocity);
	

}	

	// Does wind things
function WindThrust(center: Vector3, radius: float) {
	var hitColliders = Physics.OverlapSphere(center, radius);
		
	for (var i = 0; i < hitColliders.Length; i++) {
			
			if (hitColliders[i].gameObject.CompareTag ("AffectedByWind")) {
				var rb = hitColliders[i].gameObject.GetComponent.<Rigidbody>();
				rb.AddForce(direction * thrust);
				//print("David needs a car soon");
			}
			
	}
}