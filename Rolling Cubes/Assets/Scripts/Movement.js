#pragma strict
var thrust: float;
var madhops: float;
var maxspeed: float = 30;
private var rb: Rigidbody;
private var onground: boolean = true;


function Start()
{
	rb = GetComponent.<Rigidbody>();
}

function FixedUpdate () {
	var moveHorizontal = Input.GetAxis("Horizontal");
	var moveVertical = Input.GetAxis("Vertical");
	
	if(!onground && transform.position.y <= 0)
	{
		onground = true;
	}
	
	if (Input.GetKeyDown ("space") && onground)
	{
		var jump: Vector3 = new Vector3(0, madhops, 0);
		rb.AddForce(jump);
		onground = false;
	}
	
	var movement: Vector3 = new Vector3(moveHorizontal * thrust, 0, moveVertical * thrust);
	
	if(rb.velocity.z < maxspeed)
	{
		rb.AddForce(movement);
	}
	print(rb.velocity);
}

