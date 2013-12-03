class LineItem < ActiveRecord::Base
  belongs_to :user
  belongs_to :product
  belongs_to :order

  scope :in_cart, -> {'order_id' == nil}

end
