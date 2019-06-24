
import tv4 from 'tv4';
import stateSchema from './stateSchema';

export default({ dispatch, getState }) => next => action => {
    next(action);

    const result = tv4.validate(getState(), stateSchema);
    if (!result) {
        console.warn('Invalid schema detected!');
    }
    
}


/*
 1 {
 2   "definitions": {},
 3   "$schema": "http://json-schema.org/draft-07/schema#",
 4   "$id": "http://example.com/root.json",
 5   "type": "object",
 6   "title": "The Root Schema",
 7   "required": [
 8     "comments",
 9     "auth"
10   ],
11   "properties": {
12     "comments": {
13       "$id": "#/properties/comments",
14       "type": "array",
15       "title": "The Comments Schema",
16       "items": {
17         "$id": "#/properties/comments/items",
18         "type": "string",
19         "title": "The Items Schema",
20         "default": "",
21         "examples": [
22           "Comment #1",
23           "Comment #2"
24         ],
25         "pattern": "^(.*)$"
26       }
27     },
28     "auth": {
29       "$id": "#/properties/auth",
30       "type": "boolean",
31       "title": "The Auth Schema",
32       "default": false,
33       "examples": [
34         true
35       ]
36     }
37   }
38 }
*/
