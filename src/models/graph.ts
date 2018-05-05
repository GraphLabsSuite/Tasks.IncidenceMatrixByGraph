export interface IGraphView {
  vertices: IVertexView[];
  edges: IEdgeView[];
}

export interface IEdgeView {
  vertexOne: string;
  vertexTwo: string;
}

export interface IVertexView {
  name: string;
}