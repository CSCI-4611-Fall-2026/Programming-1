/* GopherGfx App Template
 * CSCI 4611, Fall 2026, University of Minnesota
 * Instructor: Evan Suma Rosenberg <suma@umn.edu>
 */ 

import * as gfx from 'gophergfx'

export class App extends gfx.GfxApp
{
    private testObject: gfx.Mesh2;

    // --- Create the App class ---
    constructor()
    {
        // initialize the base class gfx.GfxApp
        super();

        this.testObject = gfx.Geometry2Factory.createRectangle();
    }


    // --- Initialize the graphics scene ---
    createScene(): void 
    {
        this.renderer.background = new gfx.Color(0, 0.25, 0.25);

        this.testObject.material.color.set(0, 0.5, 0, 1.0);
        
        this.testObject.position.set(0.25, 0.1);
        this.testObject.rotation = gfx.MathUtils.degreesToRadians(45);
        
        this.scene.add(this.testObject);
    }

    
    // --- Update is called once each frame by the main graphics loop ---
    update(deltaTime: number): void 
    {
        this.testObject.rotation += 0.01;
    }
}