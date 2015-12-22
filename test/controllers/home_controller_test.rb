require 'test_helper'

class HomeControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get tic_tac_toe" do
    get :tic_tac_toe
    assert_response :success
  end

  test "should get rps" do
    get :rps
    assert_response :success
  end

  test "should get matching" do
    get :matching
    assert_response :success
  end

  test "should get magic_eight_ball" do
    get :magic_eight_ball
    assert_response :success
  end

end
