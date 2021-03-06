import { createExpressRoute } from 'typescript-routes-to-openapi-server';

type NewPet = {
  name: string;
  tag?: string;
};

type Pet = NewPet & {
  id: number;
};

export class PetController {
  /**
   * @description Returns all pets from the system that the user has access to\nNam sed condimentum est. Maecenas tempor sagittis sapien, nec rhoncus sem sagittis sit amet. Aenean at gravida augue, ac iaculis sem. Curabitur odio lorem, ornare eget elementum nec, cursus id lectus. Duis mi turpis, pulvinar ac eros ac, tincidunt varius justo. In hac habitasse platea dictumst. Integer at adipiscing ante, a sagittis ligula. Aenean pharetra tempor ante molestie imperdiet. Vivamus id aliquam diam. Cras quis velit non tortor eleifend sagittis. Praesent at enim pharetra urna volutpat venenatis eget eget mauris. In eleifend fermentum facilisis. Praesent enim enim, gravida ac sodales sed, placerat id erat. Suspendisse lacus dolor, consectetur non augue vel, vehicula interdum libero. Morbi euismod sagittis libero sed lacinia.\n\nSed tempus felis lobortis leo pulvinar rutrum. Nam mattis velit nisl, eu condimentum ligula luctus nec. Phasellus semper velit eget aliquet faucibus. In a mattis elit. Phasellus vel urna viverra, condimentum lorem id, rhoncus nibh. Ut pellentesque posuere elementum. Sed a varius odio. Morbi rhoncus ligula libero, vel eleifend nunc tristique vitae. Fusce et sem dui. Aenean nec scelerisque tortor. Fusce malesuada accumsan magna vel tempus. Quisque mollis felis eu dolor tristique, sit amet auctor felis gravida. Sed libero lorem, molestie sed nisl in, accumsan tempor nisi. Fusce sollicitudin massa ut lacinia mattis. Sed vel eleifend lorem. Pellentesque vitae felis pretium, pulvinar elit eu, euismod sapien.\n
   * @openapi_operationId findPets
   */
  findPets = createExpressRoute<{
    path: '/pets';
    method: 'get';
    requestQuery: {
      /**
       * @description tags to filter by
       */
      tags?: string[];
      /**
       * @description maximum number of results to return
       */
      limit?: number;
    };
    /**
     * @description pet response
     */
    responseBody: Pet[];
  }>((req, res) => {
    res.send([
      {
        id: 1,
        name: 'Garfield',
        tag: 'cat',
      },
    ]);
  });

  /**
   * @description Creates a new pet in the store. Duplicates are allowed
   * @openapi_operationId addPet
   */
  addPet = createExpressRoute<{
    path: '/pets';
    method: 'post';
    /**
     * @description Pet to add to the store
     */
    requestBody: NewPet;
    /**
     * @description pet response
     */
    responseBody: Pet[];
  }>((req, res) => {
    res.send([
      {
        id: 1,
        name: 'Garfield',
        tag: 'cat',
      },
    ]);
  });

  /**
   * @description Returns a user based on a single ID, if the user does not have access to the pet
   * @openapi_operationId find pet by id
   */
  findPetById = createExpressRoute<{
    path: '/pets/:id';
    method: 'get';
    pathParams: {
      /**
       * @description ID of pet to fetch
       */
      id: number;
    };
    /**
     * @description pet response
     */
    responseBody: Pet;
  }>((req, res) => {
    res.send({
      id: 1,
      name: 'Garfield',
      tag: 'cat',
    });
  });

  /**
   * @description deletes a single pet based on the ID supplied
   * @openapi_operationId deletePet
   */
  deletePet = createExpressRoute<{
    path: '/pets/:id';
    method: 'delete';
    pathParams: {
      /**
       * @description ID of pet to delete
       */
      id: string;
    };
    /**
     * @description pet deleted
     * @openapi_statusCode 204
     */
    responseBody: any;
  }>((req, res) => {
    res.status(204).send();
  });
}
