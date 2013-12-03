class ProductsController < ApplicationController
  respond_to :json, :html

	def index
		@products = Product.all
    respond_with(@products) do |format|
      format.html
      format.json { render :json => @products.as_json}
    end 
	end

	def show
		@product = Product.find(params[:id])
	end
end